const express= require('express');
const connect = require('./config/database');
const app=express();

//const Tweet=require('./models/tweet');
const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');
app.listen(3000, async ()=>{
    console.log('Server started at Port 3000');
    await connect();
    console.log('Mongo DB Connected');
    // const tweet=await Tweet.create({
    //     content:'Third tweet',
    // });

    //const tweets=await Tweet.find({userEmail:'a@b.com'});

    // const tweet= await Tweet.findById('6650c7f4db98f017f416bb24');
    // tweet.userEmail='b@c.com';
    // await tweet.save();

    const tweetRepo=new TweetRepository();

    //const tweet=await repo.update('6650c7f4db98f017f416bb24',{content:'Now updated'}); 
    // const tweet=await tweetRepo.create({content:'Tweet with a comment'});
    // console.log(tweet);
    // tweet.comments.push({content:'first comment here'});
    // await tweet.save();
    // console.log(tweet); 

    // const tweet=await tweetRepo.create({content:'Tweet with comment schema'});
    // console.log(tweet);
    // const comment=await Comment.create({content:'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();

    //const tweet=await tweetRepo.getWithComments('6650d28566fd8508c67dd007');

    // const tweet=await tweetRepo.getAll(0,4);
    // console.log(tweet[0].contentWithEmail);

    const tweet=await tweetRepo.create({content:'With hooks now'});


    console.log(tweet);
}); 