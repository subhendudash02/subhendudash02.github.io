<div class="header">
    <nav class="navbar">
        <a href="/" class="nav-logo">Subhendu Dash</a>
        <ul class="nav-menu">
            <li class="nav-item"><a class="nav-link" href="/">Hello</a></li>
        </ul>
    </nav>
</div>

<style>
    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .header{
        background-color: #0C1017;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2% 0 2%; 
    }

    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-item {
        margin-left: 5rem;
    }

    .nav-link{
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
    }

    .nav-link:hover{
        color: rgb(25, 207, 25);
        transition-duration: 1s;
    }

    .nav-logo {
        font-size: 20px;
        font-weight: 700;
        color: rgb(25, 207, 25);
    }

    @media only screen and (max-width: 768px) {
        .nav-logo, .nav-link {
            font-size: 15px;
        }
    }
</style>