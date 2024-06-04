const TweetRepository=require('./tweet-repository/index');

class TweetService {
    constructor() {
        this.tweetRepository=new TweetRepository;
    }

    async create(data) {
        const content=data.content;
        const tags=content.match(/#[a-z0-9_]+/g); //this regex extracts hashtags
        tags=tags.map((tag)=> tag.substring(1));
        console.log(tags);
        const tweet=await this.tweetRepository.create(data);
        //todo create hashtags and add here
        /** 
         * 1. Bulkcreate in mongoose
         * 2. Filter title of hashtag based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         */
        return tweet;
    }
}

module.exports=TweetService;

/**
 * This is my #first #tweet . I am really #excited
 */