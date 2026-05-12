package Week13;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Party {

    // Character гэдгийг GameCharacter болгож засав (Java-гийн Character-тай андуурахгүйн тулд)
    private List<GameCharacter> members;
    private Set<String> defeatedEnemies;

    public Party() {
        members = new ArrayList<>();
        defeatedEnemies = new HashSet<>();
    }

    public void addMember(GameCharacter character) {
        members.add(character);
    }

    public void removeMember(GameCharacter character) {
        members.remove(character);
    }

    public List<GameCharacter> getMembers() {
        return members;
    }

    public List<GameCharacter> getAliveMembers() {
        List<GameCharacter> alive = new ArrayList<>();

        for (GameCharacter c : members) {
            // isAlive() ард байсан цэг таслалыг (;) устгаж, хаалтыг зөв хаав
            if (c.isAlive()) {
                alive.add(c);
            }
        }

        return alive;
    }

    // Party класс дотор байсан утгагүй isAlive() методыг устгав
    // Учир нь isAlive() нь GameCharacter класс дотор байх ёстой.

    public void defeatEnemy(String enemyName) {
        defeatedEnemies.add(enemyName);
    }

    public Set<String> getDefeatedEnemies() {
        return defeatedEnemies;
    }
}
