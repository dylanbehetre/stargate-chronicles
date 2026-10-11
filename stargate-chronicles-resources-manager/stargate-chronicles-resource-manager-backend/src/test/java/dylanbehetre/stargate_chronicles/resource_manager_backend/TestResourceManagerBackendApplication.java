package dylanbehetre.stargate_chronicles.resource_manager_backend;

import org.springframework.boot.SpringApplication;

public class TestResourceManagerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.from(ResourceManagerBackendApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
