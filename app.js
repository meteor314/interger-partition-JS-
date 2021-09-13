
        /*
                                ======== partition d'un nombre entier.==========
                                
            // d'après Wikipédia En notant, pour n et k entiers strictement positifs, p(n,k) le nombre de partitions de n en k parties, la fonction p est récursive et vérifie
             relation suivante pour tous n > k > 1 :
             p(n, k) = p(n – 1, k – 1) + p(n – k, k) ;
             les conditions initiales :
                p(n, k) = 0 si n < k ,
                p(n, n) = p(n, 1) = 1. 
        */
                function partition (nb){
                    var myArray=[nb];
                    var k =0;
                    myArray[k] =nb;
                    while(1){
                        show(myArray, k+1);                
                        var partition =0;
                        while(k >=0 && myArray[k]==1){
                            partition +=myArray[k];
                            k--;
                        }
                        if(k<0) 
                            return 0;                
                        myArray[k]--;
                        partition++;
                        while (partition > myArray[k]) { 
                            myArray[k+1] = myArray[k]; 
                            partition = partition - myArray[k]; 
                            k++; 
                        }         
                        myArray[k+1] = partition; 
                        k++; 
                    }
                }
                var counter =0;
                function show( showArray=[], n)  { 
                    var test = document.getElementById("test");
                    for (var i = 0; i < n; i++) 
                    test.innerHTML+=" + " + showArray[i] + "    ";
                    test.innerHTML +="= <br>" ;
                    counter++;
                } 
                var number = prompt("Please pay attention! This algorithm uses JS. It is therefore ADVISED to use a small number, for example 15 or 20 (max). A large number could crash your browser. Please enter a number to calculate its partition :  ")
                partition(number);  
                test.innerHTML += "Il existe : " +counter + " façons d'écrire ce nombre " + "!";