import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css'; 

const App = () => {
    return (
        <ChatEngine
			height='100vh'
			userName='Souvik1406'
			userSecret='Apple'
			projectID='4e5a01bb-7dba-4abc-a020-726b789bd541'
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
    );
}

export default App;