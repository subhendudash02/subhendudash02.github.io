<script defer>
    import { Router } from "svelte-navigator";
   
    // const hamburger = document.querySelector(".hamburger");
    // const navMenu = document.querySelector(".nav-menu");
    // const navLink = document.querySelectorAll(".nav-link");

    // hamburger.addEventListener("click", mobileMenu);

    // function mobileMenu() {
    //     hamburger.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    // }

    // if (navLink) {
        // navLink.forEach(n => n.addEventListener("click", closeMenu));
    // }

    // function closeMenu() {
    //     hamburger.classList.remove("");
    //     navMenu.classList.remove("active");
    // }
</script>


<div class="header">
    <Router>
        <nav class="navbar">
            <a href="/" class="nav-logo">Subhendu Dash</a>
            <ul class="nav-menu">
                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="/">Contact</a></li>
                <li class="nav-item"><a class="nav-link" href="/">Contact</a></li>
            </ul>
            <div class="hamburger" onclick="">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </Router>
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
        padding: 0 3% 0 3%; 
    }

    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-item {
        margin-left: 5rem;
    }

    .nav-link {
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
    }

    .nav-link:hover {
        color: rgb(25, 207, 25);
        transition-duration: 1s;
    }

    .nav-logo {
        font-size: 20px;
        font-weight: 700;
        color: rgb(25, 207, 25);
    }

    .hamburger {
        display: none;
    }

    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #FFFFFF;
    }

    @media only screen and (max-width: 768px) {
        .navbar {
            padding: 1% 5% 1% 5%;
        }
        .nav-logo, .nav-link {
            font-size: 15px;
        }

        .nav-menu:focus-within {
            left: 0;
        }

        .nav-item {
            display: none;
        }

        .hamburger {
            display: block;
            cursor: pointer;
        }

        .hamburger:focus-within .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger:focus-within .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger:focus-within .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

    }
</style>