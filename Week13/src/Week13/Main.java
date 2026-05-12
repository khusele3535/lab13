package Week13;

import java.util.List;

public class Main {

    public static void main(String[] args) {
        // 1. Inventory (Map) турших
        Inventory inventory = new Inventory();
        inventory.addItem("Potion", 5);
        inventory.addItem("Sword", 1);

        System.out.println("--- Inventory ---");
        System.out.println("Potion тоо: " + inventory.getQuantity("Potion"));
        System.out.println("Sword тоо: " + inventory.getQuantity("Sword"));

        // 2. Party (List) турших
        Party party = new Party();

        // Таны өөрийн үүсгэсэн класс GameCharacter нэртэй байгаа тул:
        GameCharacter hero1 = new GameCharacter("Knight", 100);
        GameCharacter hero2 = new GameCharacter("Mage", 0); // Үхсэн баатар

        party.addMember(hero1);
        party.addMember(hero2);

        System.out.println("\n--- Party ---");
        System.out.println("Нийт гишүүд: " + party.getMembers().size());

        List<GameCharacter> aliveOnes = party.getAliveMembers();
        System.out.println("Амьд гишүүд: " + aliveOnes.size());
        for (GameCharacter c : aliveOnes) {
            System.out.println("- " + c.getName() + " (HP: " + c.getHp() + ")");
        }

        // 3. Container (Generic) турших
        System.out.println("\n--- Generic Container ---");
        Container<String> stringContainer = new Container<>("Hello OOP World!");
        System.out.println("Container-ийн утга: " + stringContainer.getValue());

        Container<Integer> intContainer = new Container<>(2024);
        System.out.println("Тоон утга: " + intContainer.getValue());
    }
}
