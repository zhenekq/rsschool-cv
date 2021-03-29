package arist.lab2.datastorage.dataimport;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

public class TextFileDataSource {
    public void LoadData(String filename,List<String>data){
        DataChecker dataChecker = new DataChecker();
        try(BufferedReader src = new BufferedReader(new FileReader(filename))){
            String line;
            while((line = src.readLine())!=null){
                try {
                    dataChecker.checkDataItem(line);
                    data.add(line);
                    System.out.println(" '" + line + "' -> loaded success");
                } catch (Exception e) {
                    System.out.println(e.getMessage());
                }
            }
        }catch (FileNotFoundException e){
            System.out.println("File '" + filename +"' not found.");
        }catch (IOException e){
            System.out.println("Error while working with file '" + filename + "'.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
