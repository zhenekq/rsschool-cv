package arist.lab2.processors;

import java.util.*;

public class DataStatistics {
    public Collection<String> collect(ArrayList<String> data){
        Collection<String> collect = new ArrayList<>();
        TreeMap<String, Integer> treeMap = new TreeMap<>();
        for (String line : data) {
            String[] parts = line.split("->");
            String name = parts[0];
            Integer amountOfMaterials = Integer.parseInt(parts[1]);
            if (treeMap.containsKey(name)) {
                treeMap.replace(name, treeMap.get(name) + amountOfMaterials);
            } else {
                treeMap.put(name, amountOfMaterials);
            }
        }
        for (String name : treeMap.keySet())
            collect.add(name + ": " + treeMap.get(name));
        return collect;
    }
}
