package dylanbehetre.stargate_chronicle.game_backend;

import org.springframework.boot.SpringApplication;

public class TestGameBackendApplication {

	public static void main(String[] args) {
		SpringApplication.from(GameBackendApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
