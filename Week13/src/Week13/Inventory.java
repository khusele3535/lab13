package Week13;

import java.util.HashMap;
import java.util.Map;

public class Inventory {

    private Map<String, Integer> items;

    public Inventory() {
        items = new HashMap<>();
    }

    public void addItem(String name, int quantity) {
        items.put(name, items.getOrDefault(name, 0) + quantity);
    }

    public void removeItem(String name, int quantity) {
        if (!items.containsKey(name)) {
            return;
        }

        int current = items.get(name) - quantity;

        if (current <= 0) {
            items.remove(name);
        } else {
            items.put(name, current);
        }
    }

    public int getQuantity(String name) {
        return items.getOrDefault(name, 0);
    }

    public boolean hasItem(String name) {
        return items.containsKey(name);
    }

    public Map<String, Integer> getItems() {
        return items;
    }
}