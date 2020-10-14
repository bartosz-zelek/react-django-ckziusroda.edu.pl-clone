# react-django-ckziusroda.edu.pl-clone
A clone of my school page https://ckziusroda.edu.pl/.

Used:
- Frontend: React
- Backend: Django (as REST API)
  
For the time being, the built-in administrator panel in the Django framework is used to manipulate the page content.

Tips:
- Model *Document* let admin upload the file to the server and get a relative url to the item. Then admin can use this url in *Post* or *News* using Markdown syntax.
- Admin can directly go to post modiication view by going to it on the website and pressing the *~* key.

Link: https://ckziusroda-clone.cf

npm12 run dev
python manage.py collectstatic
