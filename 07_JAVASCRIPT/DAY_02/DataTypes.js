        //DataTypes

        //1) String Example
        
        var name='brijosh'
        console.log(name);

        var Empname="sumesh"
        console.log(Empname);

        var Studname=`Ramesh`
        console.log(Studname);

        //String concatination
        console.log("one of my student name is" + name);
        console.log("one of my student name is " , Empname);
        console.log(`one of my student name is  ${Studname}`);

        //2 Numbers Example
        var n1=3;
        var n2=3.2532;
        console.log(n1,n2);
        console.log(typeof(n2));

        //3) Boolean Example
        const ab= true;
        const bc= false;

        console.log(ab);
        console.log(bc);


        //4) Null & Undefined 
        let names;
        console.log(names);

        //null
        let LastName=null;
        console.log(LastName);

        // 5)Object

        const student={
            id:123,
            name:'sudhakaran',
            class : 10
        }
        console.log(student);
        console.log(student.name);


        // 6) Array
        var students=["john","sarah",12345,4114,true,null]
        console.log(students);
        console.log(students[1]);

        // 7)Function
        function add(a,b)
        {
            c=a+b
            console.log("sum of two numbers : " + c);
        }

        add(4,7)

        function addition(a,b)
        {
            c=a+b
            return c
        }

        console.log(addition(10,15));