# مشروع تحدث العربية
## User Story


- **Landing**: This page is the main page of the site. It'll have a navigation bar, header of the site logo and main design (arabic letters), mini store section where we'll show some products that supports the campaign (تحدث العربية) or just basicaly has to do with arabic. In the store section we won't be showing product that we sell ourselves clicking on the product will take you to the store that sells it and you can order it from there. Landing page will also have a podcast section for the campaign podcast (تحدث العربية). If the user is logged in the lessons proccess will be also shown the first thing on landing page with some optional quizes.This page will be Public but some features will only show for registred users

- **Register**: On registration a user can choose his preferred language to learn arabic with (on start there will only be english), and will also choose his field of work so that we can provide him with the technical terms of that field.

- **Confirmation**: after registering a message will be sent to the user's email or phone number to confirm it his account.

- **Login**: When user account is confirmed the system will navigate him to the login page to login to his account.

- **User Page**: The system will immedietly navigate you to this page after logging in, here you can edit your personal information and add or remove you avater.

- **Discussion Page**: Public discussion  page is where users can communicate with each other and share posts and comment on other users posts.


- **Learning Page**: When user opens this page for the first time he will get to choose his arabic knowledge level, and will be starting lessons according to that option. After each lesson the user will have a test of pronunciation and listening. Pronunciation tests will allow the user to record a voice immtating one on the database and our system will compare them and show if the user passed or not. While the Listening test will provide a voice record and the user will choose it's meaning from a given sentences options. Not passing means user can't go on with the lessons plan and will have to take this lesson again. 

- **Admins**: Admins can see all users and their learning progress, and can also delete or disable any user account. They can also reset a User leassons progress or move him to the next level.

## Project Trello Board

[MP-Project-Shahad](https://trello.com/b/yYCqELgt/mp-project-shahad)

## Project Slides

[will be added soon!]

## Server Repo

[Server repo](https://github.com/MP-Project-Shahad/server)

## Client Deployment

[will be added soon!]


## Components 

| COMPONENT | URL               | Permissions | Behavior                          |
| ----------- | ----------------- | ----------- | --------------------------------- |
| landing       | "/"    | Public | Home page, will be accessible to all users.       |
| userPage         | "/UserPage/:id"  |  Private `Authentication`| Users personal page to display user information. |
| login&signUp       | "/signin" | Public | Sign in/up page, will be accessible to all users. |
| confirm        | "/confirm"     | Public     | New users will be directed to this page to activate their accounts.            |
| forgotPass        | "/forgotPass"  | Public  | A user can send a requiest to reset his password here. |
| resetPass        | "/resetPass/:id"  | Private (will get the link on email) | User will get a reset link that will direct him to this page. |
| lessons        | "/lessons"  | Private `Authentication` | This page will only show for logged in Users. |
| lesson        | "/lesson/:id"  | Private `Authentication` | This page will only show for logged in Users who took the placement test and got assigned to a level. |





## Design Wireframe

![newest_wireframe-2-2](https://user-images.githubusercontent.com/92247858/146650325-925ba4c6-cbf2-4734-bdb5-4a8232880db7.jpg)
![newest_wireframe-1](https://user-images.githubusercontent.com/92247858/146650332-8ff5df4e-6675-461f-a5ab-e47f4fb12815.jpg)
![newest_wireframe-2](https://user-images.githubusercontent.com/92247858/146650336-4a958068-b93f-41bb-8478-886abc2d5ad9.jpg)
![Inkednewest_wireframe-3-2](https://user-images.githubusercontent.com/92247858/146650343-365a92ff-e977-4bae-ae66-6ca450de6564.jpg)
![newest_wireframe-3](https://user-images.githubusercontent.com/92247858/146650344-f58a7d2e-25fd-49e9-9189-9500fe051e6f.jpg)



## FrontEnd UML Diagram

![Untitled Diagram drawio (1)](https://user-images.githubusercontent.com/92247858/146669117-84d78b47-a769-4df5-99c1-0f65db10624e.png)



##site screenshot
![site screenshot](https://user-images.githubusercontent.com/92247858/157385534-cefcc75a-4028-4bcb-9d26-f7406a7fd122.jpeg)
