package arist.lab2.datastorage.dataimport;

import java.util.concurrent.ExecutionException;

public class DataChecker {
    public void checkDataItem(String data) throws Exception {
        String[] partsOfLine = data.split("->");

        if (partsOfLine.length == 1)
            throw new Exception(" Error in line: " + data + " - no separator");

        if (partsOfLine.length > 2)
            throw new Exception(" Error in line: " + data + " - more than 1 separator");

        int amountOfTire = 0;
        for (int i = 0; i < partsOfLine[0].length(); i++) {
            if (partsOfLine[0].charAt(i) == '-')
                amountOfTire++;
            if(partsOfLine[0].charAt(0) == '-')
                throw new Exception(" Error in line: " + data + " - place of separator is wrong");
            else if(amountOfTire == 1)
                continue;
            else if(partsOfLine[0].charAt(partsOfLine[0].length() - 1) == '-')
                throw new Exception(" Error in line: " + data + " - place of separator is wrong");
            else if(amountOfTire > 1)
                throw new Exception(" Error in line: " + data + " - amount of dashes is wrong");
            if (!(Character.isAlphabetic(partsOfLine[0].charAt(i)))) {
                throw new Exception(" Error in line: " + data + " - not all letters before separator");
            }
        }

        for (int i = 0; i < partsOfLine[1].length(); i++)
            if (!Character.isDigit(partsOfLine[1].charAt(i)))
                throw new Exception(" Error in line: " + data + " - not all digits before separator");
    }
}
