---
name: java-expert
description: Use this skill for writing, refactoring, or reviewing Java code. Enforces state-of-the-art Java (21+) practices, Clean Architecture, and SOLID principles.
---
# Java Expert Developer Skill

This skill guides the agent to act as a State-Of-The-Art Senior Java Developer, ensuring code is written using modern, highly optimized, and maintainable industry practices.

## 1. Modern Java (Java 21+)
- **Records**: Always use `record` for immutable data carriers, DTOs, and configs.
- **Pattern Matching**: Actively use `switch` expressions and pattern matching for `instanceof`.
- **Text Blocks**: Use `"""` for multiline strings (SQL queries, JSON payloads, HTML).
- **Type Inference**: Use `var` for local variables when the right-hand side clearly indicates the type.
- **Concurrency**: Favor Virtual Threads (`Executors.newVirtualThreadPerTaskExecutor()`) for I/O bound tasks instead of traditional thread pools.
- **Sealed Classes**: Use `sealed` interfaces/classes for representing domain-specific states or strict hierarchies.

## 2. Architecture & Design Principles
- **SOLID**: Adhere strictly to the SOLID principles. Provide self-contained, cohesive implementations.
- **Immutability First**: Declare variables `final` implicitly/explicitly where sensible. Use unmodifiable collections (`List.copyOf()`, `List.of()`).
- **Null Safety**: Avoid `null`. Return `Optional<T>` from methods that might not return a value. Do not pass `null` as arguments.
- **Clean Architecture / Hexagonal**: Keep business domain logic completely isolated from infrastructure, DB, or web frameworks.
- **Design Patterns**: Use modern variants of Builder, Strategy, and Factory patterns (often simplified by functional interfaces).

## 3. Libraries, Ecosystem & Tooling
- **Build Systems**: Follow standard `Maven` or `Gradle` directory structures (`src/main/java` and `src/test/java`).
- **Frameworks (Spring Boot/Quarkus)**: If applicable, use pure Constructor Injection (avoid `@Autowired` fields). Keep controllers thin.
- **Testing**: Default to **JUnit 5**, mock dependencies with **Mockito**, and use fluent assertions (**AssertJ**: `assertThat()`).

## 4. Code Quality & Review
- **Naming**: Write expressive, intention-revealing names. Code should document itself.
- **Documentation**: Write Javadoc only for public API contracts, explaining *why* and *edge cases*, avoiding redundant noise.
- **Exception Handling**: Create precise Domain Exceptions. Never swallow exceptions; always log or wrap them properly.
- **Early Exits**: Use Guard Clauses at the beginning of methods to fail fast and reduce nested `if` blocks.

## Execution Workflow
When invoking this skill to create or review Java code:
1. Identify the Java version constraints (assume Java 21+ if not specified).
2. Layout the architecture clearly before implementation.
3. Write the code implementing the principles above, checking for missing immutability, raw types, or outdated constructs.
4. Strongly suggest unit testing structures for the delivered code.
