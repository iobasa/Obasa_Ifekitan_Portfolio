<template>
    <div>
      <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >Roku Flashback</h1>
      <h2>A movie, tv and audio streaming app</h2>
      </section>
    </b-col>

    <b-col>
      <section>
       <p>Designer: Nour Al-Osman</p>
       <p>Developer: Ifekitan Obasa</p>
      </section>
      
    </b-col>

    <b-col>
      <h4>Github link: <a href="https://github.com/iobasa/Al-Osman_N_Obasa_I_Roku-Flashback.git">Roku Flashback App</a></h4>
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/roku.webm" type="video/webm">
    <source src="@/assets/roku.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    <b-col>
      <section>
        <br><br>
        <h3>Project description</h3>
        <p>Creating a streaming app. A user should be able to log in, filter and select a movie, tv show, or audio based on user profile (adult or kids). This means that you’ll have to restrict access to some content based on age or ratings, and your users will need rights and priveleges as well. The UX / UI should update based on the user (children / adults) - create 2 themes, and render the appropriate theme on login. Part of the API that you’re building should allow a user to comment on the selection, rate it, and share via social media.</p>
      </section>
      
    </b-col>

     <b-col>
      <section>
        <h3>What I used:</h3>
        <p  >
        This website was made using HTML, SASS, VueJS, NodeJS, ExpressJS, PHP and MySQL, I made use of the PHP and MySQL queries to call to the databases and retieve the information on the movies, tv shows, and music.
        </p>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h3>The movie and audio streaming</h3>
        <p><b>Filtering</b><br><br>
With the filtering of the content, I wanted to make an easier way to filter through content using the methods we were taught in class. So from one of the videos about using permissions to navigate, I thought of making another row in the table called “isadult” that would have the value of “1” for adults and “0” for kids and used the regular way which was used to make the tbl_”media” in PHP and used that to grab the data from the table.

I took that and tried to find a way to actually filter the content by decade. Since they vary in years: 1987, 1979, and so on. So I thought of a way to group those which I thought would be a lot easier. I did some research and found the SQL query about between: <a href="https://www.dofactory.com/sql/where-between">SQL between query</a>
<br><br><br>

<b>Navigation</b><br><br>

The design on our app was quite different; on one hand, the kid’s section was done using the same tactics that were taught in class, however, we had a different concept for the adult section.

Firstly, when I first developed the app, I thought of how to do different navigation to the kid’s section and used the admin row in the tbl_user to indicate that this was a child or an adult, from there I used conditional rendering to indicate which was an adult or not, v-if=”currentuser.admin===’1’” and v-else.

<a href="https://vuejs.org/v2/guide/conditional.html">VueJS Conditional terms Guide</a>


That was the first problem in navigation, the second was the fact that when you went to the entry point and used the props it would not show the page of the media that was clicked on. I spent about 2 days trying to figure out the logic of this and then realized: that it was because the information was not being carried through to the other page when looking at the user component, it declared the liveuser = currentuser and pushed it to the userhome page basically transferring that information of the current user to that page as well. But when I pushed it to another page, there was no information being pushed forward and it was confusing. So I made multiple navigations to navigate to each of the paged making sure to pass that information forward to each of the pages. Then the problem of going back to the entry point arose. When you went back on the page, it would be blank once again no information being passed, so we decided to make a button that would go back to the entry point and be easier to navigate for the viewer, the “back to categories” button. 

I made use of <a href="https://www.postman.com/">postman</a> to test out if most of my logic would work, and it was very helpful.
<br><br><br>

<b>Social Media APIs (liking, sharing, commenting)</b><br><br>

For the Social Media links API and likes, I found it quite a bit harder. I made sure on the kid’s section that there was no way they could just share. But on the Adults section, you can.

The liking option was a bit harder to go for the look of that, so I found a way in bootstrap to give the effect of a like button! Using the radio option:
<a href="https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=buttons-radio">Bootstrap Buttons Radio</a>

For the sharing, I went to the Facebook for developers site and got the API for a share and like button: <a href="https://developers.facebook.com/docs/plugins">Developers FaceBook site.</a>

Same for twitter: <a href="https://publish.twitter.com/#">Developers Twitter site.</a> 

          
          Using VueJs I am able to create an audio and visual streaming app which can be used by anyone. </p>
      </section>
      
    </b-col>

    
  </b-row>
</b-container>  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

     .title{
     font-size: 1rem;
    font-weight: 700;
  }

  h1{
    color: #151E3F;
    font-size: 3.5rem;
    font-weight: 1000;
    font-style: italic;
    text-align: center;
    text-shadow: 4px 4px #E7C9AE;
  }

  h2{
    padding-top: 15px;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
  }

   h3{
     margin-top: 30px;
    font-size: 2rem;
    font-weight: 1000;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

  h4{
    margin-top: 30px;
    font-size: 1.5rem;
    font-style: bold;
    font-weight: 1000;
    text-align: center;
  }

  b{
    color: #0C0F33;
    font-weight: 1000;
  }

  p{
    font-size: 1rem;
    color:#3F3D54;
  }

    a{
    color: #0C0F33;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
  }

  a:hover{
    border-bottom: 2px solid #DC9E82 ;
    text-decoration: none;
    color: #0C0F33;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
  }


@media screen and (min-width: 64em) {
     .title{
     font-size: 1rem;
    font-weight: 700;
    text-shadow: 4px 4px #e8d7d5;
  }

  h1{
    color: #151E3F;
    font-size: 6rem;
    font-weight: 1000;
    font-style: italic;
    text-align: center;
    text-shadow: 4px 4px #E7C9AE;
  }

  h2{
    
    font-size: 2.5rem;
    padding-top: 15px;
    font-weight: 800;
    text-align: center;
  }

   h3{
    font-size: 3rem;
    font-weight: 1000;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

  h4{
    font-size: 1.5rem;
    font-style: bold;
    font-weight: 1000;
    text-align: center;
  }

  b{
    color: #0C0F33;
    font-weight: 1000;
  }

  p{
    font-size: 1.3rem;
    color:#3F3D54;
  }

    a{
    color: #0C0F33;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
  }

  a:hover{
    border-bottom: 4px solid #DC9E82 ;
    text-decoration: none;
    color: #0C0F33;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
  }

}
</style>