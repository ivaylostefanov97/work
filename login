<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
        <link rel="stylesheet" href="bootstrap/css/bootstrap-theme.css">
        <link rel="stylesheet" href="bootstrap/css/app.css" />
    </head>
    <body ng-app="computers" ng-controller='pageController'>

            <div class="container" style="width:400px;">
              <form class="form-signin" role="form">
                <h2 class="form-signin-heading">Please sign in</h2>
                <input type="username" id="the-username" class="form-control" placeholder="Username" required="" autofocus="">
                <br>
                <input type="password" id="the-password" class="form-control" placeholder="Password" required="">
                <br>
                <button id="button" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p>Don't have an account?<a href="signUp.html"> Sign up</a></p>
              </form>
            </div>

        <script src="libs/jquery-1.11.1.min.js"></script>
        <script src="libs/bootstrap.min.js"></script>
        <script src="libs/angular.min.js"></script>
        <script src="controllers/app.js"></script>
        <script src="controllers/controller.js"></script>
        <script src="scripts/signIn.js"></script>
    </body>
</html>
