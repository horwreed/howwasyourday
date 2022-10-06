import React from 'react';


export default () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("Handling form submit")
    }

    return (
        <div>
            What makes up a good day for you?
            <form onSubmit={handleSubmit}>
                <label>
                    How was your day?
                    <input type="numerical" name="Day"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}