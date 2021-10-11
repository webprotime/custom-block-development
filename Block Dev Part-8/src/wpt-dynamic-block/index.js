const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { withSelect } = wp.data;

import placeHolder from "../place_holder.png";


// Registering A Block
registerBlockType('wpt/dynamic-block', {
    title: 'WPT Dynamic Block',
    category: 'custom-category',
    icon: 'rest-api',
    supports: {
        align: [ 'wide', 'full' ]
    },

    // Block Edit Function
    edit: withSelect(select => {
        return{
            // Send a GET query to the REST API.
            posts: select( "core" ).getEntityRecords( "postType", "post", {
                categories: 2, //category id
                per_page: 1 //number of post
            })
        };

    })(({posts, className})=>{

         // Wait for posts to be returned.
        if ( !posts ) {
            return "Loading...";
        }
        
        // If no posts are returned.
        if ( posts && posts.length === 0 ) {
            return "No posts";
        }
    
        // Grab the first post.
        const post = posts[0];
        console.log( post );

        return( 
            <div className={`${className} container`}>
                <article className="singleArticle">
                <div className="cover">
                    <img src={post.featured_image} alt="Cover Image"/>
                </div>
                <div className="content">
                    <h2>{post.title.rendered}</h2>
                    <p><RichText.Content value = {post.excerpt.rendered}/></p>
                </div>
                </article>
            </div>
        )
    }),
        
    //Block Save Function 
    save: props => {
        return null;
    },
});