package tests;

import Week13.*;
import org.junit.jupiter.api.Test;

public class CollectionsTest {

    @Test
    void testInventory() {
        Inventory inventory = new Inventory();

        inventory.addItem("Potion", 3);

        assertEquals(3, inventory.getQuantity("Potion"));
    }

    @Test
    void testParty() {
        Party party = new Party();

        GameCharacter c = new GameCharacter("Knight", 100);

        party.addMember(c);

        assertEquals(1, party.getMembers().size());
    }

    private void assertEquals(int i, int size) {
    }
}