package arist.lab2.datastorage.dataimport;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

public class TextFileDataSource {
    public void LoadData(String filename,List<String>data){
        try(BufferedReader src = new BufferedReader(new FileReader(filename))){
            String line;
            while((line = src.readLine())!=null){
                data.add(line);
                System.out.println(" '" + line + "' -> loaded");
            }
        }catch (FileNotFoundException e){
            System.out.println("File '" + filename +"' not found.");
        }catch (IOException e){
            System.out.println("Error while working with file '" + filename + "'.");
        }
    }
}
