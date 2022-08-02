# Nodemailer

## Steps

- Clone the repository

        git clone https://github.com/mdmarufsarker/send-email.git

- Create a .env file `touch .env` and paste those line with your data

        PORT=7777
        pass=<your password>
        COMPASS="mongodb://localhost:27017/nodemailer"

- The password field can be found if you turned on two step verification on your google account. Then go to security settings then click app password. Then select gmail and your operating system and boom 🔥 you are good to go.
- Copy the password and paste it into the .env file pass field.
- Make sure you start the mongodb server

        systemctl start mongodb

- Now open postman or Thunder Client for send mail. Must select the body menu then json.

```
{
  "to": "friend's email",
  "from": "your email",
  "subject": "Learning Nodemailer",
  "body": "I am learner full stack technologies."
}
```

### Follow me for more updates

[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://www.youtube.com/c/MdMarufSarkerOfficial)
[![Behance](https://img.shields.io/badge/Behance-1769ff?logo=behance&logoColor=white)](https://behance.net/mdmarufsarker)
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/mdmarufsarkerr)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/md_maruf_sarker)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/mdmarufsarker)
[![Pinterest](https://img.shields.io/badge/Pinterest-%23E60023.svg?logo=Pinterest&logoColor=white)](https://pinterest.com/md_maruf_sarker)
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white)](https://twitter.com/md_marufsarker)

