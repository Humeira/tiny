<template>
    <div>
        <article v-for="post in posts">
            <h2><a v-link="{ name: 'post', params: { id: post.id }}">{{post.title}}</a></h2>
            <p>{{post.author}} {{post.date}}</p>
            <!--<img src="{{post.avatar}}" alt="">-->
            <p>{{post.text}}</p>

        </article>
        <pre>
            {{$data | json}}
        </pre>
    </div>

</template>
<script>
    export default{
        data() {
            let myPosts = [
                 {
                     id : 100,
                    author : '@csswizardry',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg',
                    title : 'Lorem Ipsum',
                    text : 'Drink water out of the faucet poop in litter box, scratch the walls swat at dog, yet dream about hunting birds. Pee in the shoe. Touch water with paw then recoil in horror leave hair everywhere. Eat grass, throw it back up. Scratch the box eat and than sleep on your face so purr for no reason yet human is washing you why halp oh the horror flee scratch hiss bite if it smells like fish eat as much as you wish. Soft kitty warm kitty little ball of furr bleghbleghvomit my furball really tie the room together yet walk on car leaving trail of paw prints on hood and windshield immediately regret falling into bathtub but then cats take over the world or wake up wander around the house making large amounts of noise jump on top of your human\'s bed and fall asleep again yet hack up furballs. Love to play with owner\'s hair tie rub face on owner so thug cat step on your keyboard while you\'re gaming and then turn in a circle . ',
                    date : '07/23/2016'
                 },
                {
                    id : 101,
                    author : '@kerem',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg',
                    title : 'A new post',
                    text : 'Disrupt jean shorts viral hella meh, plaid cupidatat magna art party. Echo Park adipisicing literally narwhal. Williamsburg leggings church-key, craft beer forage cornhole jean shorts blue bottle pariatur. Officia sapiente bespoke, locavore plaid cray voluptate deep v ex vinyl tote bag chillwave swag occaecat. Sed banh mi 3 wolf moon single-origin coffee quis tempor. Hoodie pitchfork pork belly aliqua, shabby chic elit consequat freegan ethical try-hard mixtape. Schlitz banjo deep v ullamco blog, umami nulla sint elit skateboard Godard odio.',
                    date : '07/22/2016'
                }

            ]
            return {
                posts : myPosts
            }
        }
    }
</script>