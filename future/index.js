import inquirer from 'inquirer';
import qr from 'qr-image' ;
import fs, { writeFile } from 'fs';


inquirer
  .prompt([
    {
        message : 'Type in your url' ,
        name :"URL"
    }
  ])
  .then((answers) => {
    console.log(answers)
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt' , url , (err)=>{
        if (err) throw err;
        console.log("file have been saved")
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });