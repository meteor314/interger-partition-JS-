#include <time.h>
#include<stdio.h>

    void parsingArray(int j[], int n)

    {

        
        for ( int i = 0; i < n; i++)

           printf("%d ", j[i]);

           printf("\n");

    }

     

    void partition(int n)

    {

        int p[n]; 

        int k = 0;  

        p[k] = n;  // Initialize first partition

        int val;

        while (1)

        {


            parsingArray(p, k+1);
            val = 0;
            while (k >= 0 && p[k] == 1)
            {

                val += p[k];
                k--;

            }

     


            if (k < 0)  return; //break, the end

            p[k]--;
            val++;
            while (val > p[k])
            {

                p[k+1] = p[k];
                val = val - p[k];
                k++;

            }


            p[k+1] = val;

            k++;

        }

    }

    int main()

    {

        int n;

        printf("\nEnter a number to perform integer partition: ");

        scanf("%d", &n);
        
       time_t start_t, end_t;
       double diff_t;
       time(&start_t);
       partition(n);
       time(&end_t);
       diff_t = difftime(end_t, start_t);
       
       printf("Execution time = %f\n", diff_t);
       printf("Exiting of the program...\n");
       
        return 0;
       

    }