import React from 'react';

function Review(){
    return(
        <div className="todo-app">
            <h1>
                Review
            </h1>

            <ul className="review-list">
                <li>1. Overall, I really enjoyed using React</li>
                <div class="divider"/>
                <li>2. It felt easier to use than Angular(Atleast for me)</li>
                <div class="divider"/>
                <li>3. 10/10</li>
                <div class="divider"/>
                <li>4. Would work with it again</li>
                <div class="divider"/>
                <li>P.S. I don't like Git at all.</li>
            </ul>
        </div>
    );
}

export default Review;