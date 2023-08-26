//2.Create your own resume data in JSON format.

let Resume = {
    Name : 'Surendhar.C',
    Email : 'surenharhi5@gmail.com',
    Mobile : 9487437011,
    Address : {
      DNo: 99,
      Street : 'Indira gandhi street',
      Area : 'Palaya palayam',
      Distric : 'Erode'
    },
    Skills : ['HTML', 'CSS', 'JavaScript'],
    AcademicDetails : {
        SSLC : {
            Percentage : 86,
            Batch : 2014
        },
        HSC : {
            Percentage : 64,
            Batch : 2016
        },
        College : {
            Percentage : 67,
            Batch : 2019
        }
    },
    WorkExperience : [{
        Company : 'ShobaLimited',
        Designation : 'Admin',
        Duration : 'Nine Months'
        },{
            Company : 'Ezhumalaiyan Society',
        Designation : 'Supervisor',
        Duration : '1.5 yr'
        },{
            Company : 'JIO',
        Designation : 'Sales Executive',
        Duration : 'Six Months'
        }],
    Achievements : ` 1. I got First Place in Dance competition at Nandha Arst and Science coleege.
    2. I got First Place in National level open Dance competiton at Coonoor.`,
    Strength : ['Quick learning', 'Positive attitude', 'Self confidence'],
    Hobbies : ['Dance', 'Listening to Music']

    }
    console.log(JSON.stringify(Resume));

    // output :
    // '{"Name":"Surendhar.C","Email":"surenharhi5@gmail.com","Mobile":9487437011,"Address":{"DNo":99,"Street":"Indira gandhi street","Area":"Palaya palayam","Distric":"Erode"},"Skills":["HTML","CSS","JavaScript"],"AcademicDetails":{"SSLC":{"Percentage":86,"Batch":2014},"HSC":{"Percentage":64,"Batch":2016},"College":{"Percentage":67,"Batch":2019}},"WorkExperience":[{"Company":"ShobaLimited","Designation":"Admin","Duration":"Nine Months"},{"Company":"Ezhumalaiyan Society","Designation":"Supervisor","Duration":"1.5 yr"},{"Company":"JIO","Designation":"Sales Executive","Duration":"Six Months"}],"Achievements":" 1. I got First Place in Dance competition at Nandha Arst and Science coleege.\n    2. I got First Place in National level open Dance competiton at Coonoor.","Strength":["Quick learning","Positive attitude","Self confidence"],"Hobbies":["Dance","Listening to Music"]}'

