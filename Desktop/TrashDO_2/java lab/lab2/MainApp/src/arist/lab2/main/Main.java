package arist.lab2.main;

import arist.lab2.datastorage.dataimport.DataChecker;
import arist.lab2.datastorage.dataimport.TextFileDataSource;
import arist.lab2.processors.DataStatistics;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception {
        if(args.length == 0){
            System.out.println("Enter the path to the file by the command line!");
            System.exit(0);
        }
        ArrayList<String> data = new ArrayList<String>();
        TextFileDataSource dataSource = new TextFileDataSource();

        System.out.println("Data file: '" + Path.of(args[0])+"'");
        System.out.println("Reading current data: ");
        dataSource.LoadData(args[0],data);
        System.out.println("\nData after sorting: ");
        DataStatistics dataStatistics = new DataStatistics();
        System.out.println(dataStatistics.collect(data));

    }

}
