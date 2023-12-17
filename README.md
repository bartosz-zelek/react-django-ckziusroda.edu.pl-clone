Link: https://ckziusroda-clone.cf

A clone of my school page (https://ckziusroda.edu.pl/).

Used:
- Frontend: React
- Backend: Django (as REST API)
  
Directly over the site you can do basics of page content manipulation. Django panel let you do more stuff.

Tips:
- Model *Document* let admin upload the file to the server and get a relative url to the item. Then admin can use this url in *Post* or *News* using Markdown syntax.
- Admin can directly go to post modification view by going to it on the website and pressing the *~* key.

npm12 run dev
python manage.py collectstatic
