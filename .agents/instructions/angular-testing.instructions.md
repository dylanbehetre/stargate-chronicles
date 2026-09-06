---
applyTo: "**/*.spec.ts"
---

# Angular Testing — Idiomatic Jasmine

## Stack

- **Angular 21** with standalone components
- **Jasmine** (test runner bundled with Angular CLI)
- **TestBed** for component integration tests
- **Signals** (`model`, `signal`, `computed`) — use `component.mySignal()` to read signal values in assertions

---

## describe / it Naming Conventions

| Block | Convention | Example |
|---|---|---|
| Root `describe` | Class or service name | `describe('SearchResultsComponent', ...)` |
| Method `describe` | Method name with `()` | `describe('searchReports()', ...)` |
| Context `describe` | `when <condition>` | `describe('when user is not authenticated', ...)` |
| `it` | Starts with `should` | `it('should close the dialog when clicked', ...)` |

---

## Method-first vs Context-first

### Method-first — when methods are independent
Use when each method has its own context that does not overlap with other methods.

```typescript
describe('MyService', () => {
    describe('methodA()', () => {
        describe('when condition X', () => {
            it('should ...', () => { ... });
        });
    });
    describe('methodB()', () => {
        describe('when condition Y', () => {
            it('should ...', () => { ... });
        });
    });
});
```

### Context-first — when a shared state impacts multiple methods
Use when a `beforeEach` setup is shared across multiple method describes. **Never duplicate a `beforeEach`.**

```typescript
describe('MyComponent', () => {
    describe('when user is not authenticated', () => {
        beforeEach(() => { /* shared setup */ });

        describe('methodA()', () => {
            it('should redirect to login', () => { ... });
        });
        describe('methodB()', () => {
            it('should throw an error', () => { ... });
        });
    });
});
```

### Decision rule
```
One context → one method    →  method-first
One context → N methods     →  context-first, shared beforeEach
```

---

## beforeEach placement

The `beforeEach` must live in the **closest `describe`** that needs it.
Never hoist a `beforeEach` higher than necessary.

```typescript
describe('MyComponent', () => {
    // Global setup (TestBed, fixture) — needed by ALL tests
    beforeEach(async () => {
        await TestBed.configureTestingModule({ ... }).compileComponents();
        fixture = TestBed.createComponent(MyComponent);
        fixture.detectChanges();
    });

    describe('when visible is false', () => {
        // Scoped setup — only needed in this context
        beforeEach(() => {
            fixture.componentRef.setInput('visible', false);
            fixture.detectChanges();
        });

        it('should have the form in its default state', () => { ... });
    });
});
```

---

## given / when / then comments

Use only on **interaction tests** (click, input, async calls) where the three phases are distinct.
Skip on purely declarative assertions (e.g., "button is disabled").

```typescript
it('should close the dialog when clicked', () => {
    // given
    expect(component.visible()).toBeTrue();

    // when
    getCancelButton(fixture).click();
    fixture.detectChanges();

    // then
    expect(component.visible()).toBeFalse();
});

// No comments needed here — straightforward assertion
it('should be disabled', () => {
    expect(getCreateButton(fixture).disabled).toBeTrue();
});
```

---

## Pending tests

Use `pending('reason')` for tests that will be completed later.
Always include a message explaining **when** the test will be implementable.

```typescript
it('should reset the form when clicked', () => {
    pending('to be completed when form fields are added to ScheduleDefinition');
});
```

---

## DOM query helpers

Extract DOM queries as **named functions** at the top of the spec file.
Use `data-testid` attributes — never query by CSS class or tag name.
For PrimeNG `p-button`, query the inner `<button>` element.

```typescript
function getCancelButton(fixture: ComponentFixture<MyComponent>): HTMLButtonElement {
    return fixture.nativeElement.querySelector('[data-testid="my-cancel-button"] button');
}

function getNameInput(fixture: ComponentFixture<MyComponent>): HTMLInputElement {
    return fixture.nativeElement.querySelector('[data-testid="my-name-input"]');
}

function writeInInput(value: string, input: HTMLInputElement, fixture: ComponentFixture<MyComponent>): void {
    input.value = value;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
}
```

---

## Component setup — standalone + signals (Angular 21)

```typescript
describe('MyComponent', () => {
    let component: MyComponent;
    let fixture: ComponentFixture<MyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MyComponent]  // standalone component — import, do not declare
        }).compileComponents();

        fixture = TestBed.createComponent(MyComponent);
        fixture.componentRef.setInput('myRequiredInput', someValue);  // required inputs via setInput
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
```

**Reading signal values in assertions:**
```typescript
expect(component.visible()).toBeTrue();         // model / signal
expect(component.someComputed()).toEqual(...);  // computed
```

---

## Service setup — TestBed + SpyObj

```typescript
describe('MyService', () => {
    let service: MyService;
    let apiSpy: jasmine.SpyObj<MyApiService>;

    beforeEach(() => {
        apiSpy = jasmine.createSpyObj('MyApiService', ['getData', 'deleteItem']);
        apiSpy.getData.and.returnValue(of(MOCK_DATA));

        TestBed.configureTestingModule({
            providers: [
                MyService,
                { provide: MyApiService, useValue: apiSpy }
            ]
        });
        service = TestBed.inject(MyService);
    });
});
```

---

## Fake child components (replacing heavy PrimeNG / child components)

Use when a child component has complex dependencies not relevant to the parent's tests.

```typescript
@Component({
    selector: 'app-my-dialog',
    template: ''
})
class FakeMyDialog implements Partial<MyDialog> {
    readonly visible = model<boolean>(false);
    readonly items = model<Item[]>([]);
}
```

---

## Test data constants

Declare mock data as **named constants** at the top of the file, outside any `describe`.
Name them in `SCREAMING_SNAKE_CASE`.

```typescript
const MOCK_REPORTS = [
    { name: 'RPT_DAILY', entity: 'CAGIP', ... },
    { name: 'RPT_MONTHLY', entity: 'CAPS', ... },
];

const VALID_TEMPLATE_NAME = 'VALID_TEMPLATE_NAME';
```

---

## Extracting fixtures and helpers into separate files

If the block of mock data, DOM query helpers, and test-model classes (constants, functions,
enum-like objects) between the imports and the first `describe` exceeds **100 lines**, extract
it into sibling files next to the `.spec.ts` instead of leaving it inline. This keeps the spec
file focused on `describe` / `it` blocks.

Split by responsibility, not by an arbitrary single "fixtures" dump:

| File suffix | Content | Example |
|---|---|---|
| `.spec-mocks.ts` | Plain data constants, no behavior | `MOCK_REPORTS`, `VALID_TEMPLATE_NAME`, `DEFAULT_FORM_VALUE` |
| `.spec-helpers.ts` | DOM query functions, generic interaction helpers (no test-case logic) | `getCancelButton(fixture)`, `writeInInput(...)` |
| `.spec-models.ts` | Enum-like value objects / classes carrying test behavior (e.g. mapping a case to expected DOM state) | `RecurrenceComponent`, `FrequencyTestCase` |

```typescript
// my-component.spec-mocks.ts
export const MOCK_REPORTS = [ /* ... */ ];

// my-component.spec-helpers.ts
export function getCancelButton(fixture: ComponentFixture<MyComponent>): HTMLButtonElement {
  return fixture.nativeElement.querySelector('[data-testid="my-cancel-button"] button');
}

// my-component.spec-models.ts
export class RecurrenceComponentModel {
  constructor(public readonly label: string /* ... */) {}
  public getElement(fixture: ComponentFixture<MyComponent>): DebugElement | null { /* ... */ }
}
export const RecurrenceComponent = Object.freeze({
  DATETIME: new RecurrenceComponentModel('datetime picker' /* ... */),
});

// my-component.spec.ts
import { MOCK_REPORTS } from './my-component.spec-mocks';
import { getCancelButton } from './my-component.spec-helpers';
import { RecurrenceComponent } from './my-component.spec-models';

describe('MyComponent', () => { /* ... */ });
```

If the block is under 100 lines, keep everything inline at the top of the `.spec.ts` as described above.

---

## One assertion per `it`

Each `it` should verify a single behavior. Split multi-assertion tests so failures are unambiguous.

```typescript
// Bad — two unrelated assertions in one test
it('should update the form', () => {
  expect(component.name()).toEqual('foo');
  expect(component.isValid()).toBeTrue();
});

// Good — one behavior per test
it('should update the name', () => {
  expect(component.name()).toEqual('foo');
});

it('should mark the form as valid', () => {
  expect(component.isValid()).toBeTrue();
});
```

---

## No `if` / `for` in `it` blocks

Tests must be unconditional. If behavior varies by case, use separate `it` blocks or parameterize with a data-driven loop **outside** the `it` (e.g. `forEach` at the `describe` level), not branching logic inside the assertion.

```typescript
// Bad — conditional logic inside the test
it('should compute the total', () => {
  if (component.hasDiscount()) {
    expect(component.total()).toEqual(90);
  } else {
    expect(component.total()).toEqual(100);
  }
});

// Good — one unconditional test per case
it('should compute the discounted total', () => {
  component.applyDiscount(10);
  expect(component.total()).toEqual(90);
});

it('should compute the full total when no discount applies', () => {
  expect(component.total()).toEqual(100);
});
```

---

## Rules summary

| Rule | Detail |
|---|---|
| 1 meaningful assertion per `it` | Easier to diagnose failures |
| No `if` / `for` in `it` blocks | Tests must be unconditional |
| Each `it` is independent | No shared mutable state between tests |
| `beforeEach` at the tightest scope | Never hoist unnecessarily |
| `data-testid` for DOM queries | Never use CSS classes or tag names |
| `pending('reason')` for future tests | Always explain why it's pending |
| `given / when / then` only on interactions | Skip for simple declarative assertions |
