using System;
using System.IO;
using System.Threading;

class Program
{
    static void Main()
    {
        string filePath = "D:\\myRepository\\Portfolio\\currentTime.txt"; 
        
        while (true)
        {
            // Get the current time and format it
            string currentTime = DateTime.Now.ToString("h:mm tt");


            // Write the current time to the file (overwrites the file)
            File.WriteAllText(filePath, currentTime);

            // Wait for 1 minute before updating the time again
            Thread.Sleep(6000);
        }
    }
}






