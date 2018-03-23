import React, { Component } from 'react';

export default class StoryItem extends Component { 
    render() {
        return(
            <div>
                {this.props.stories.map((title, index) => 
                        <h4>Hey</h4>
                    )}
                <p>Hello</p>

            </div>
        )
    }

}
