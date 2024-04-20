import { io } from "socket.io-client";

let socket = null;

// const BaseUrl = process.env.REACT_APP_SOCKET_URL;

export const connect = (gameId, onGameReady) => {
    socket = io("http://localhost:8080");
    // production
    // socket = io("https://deepdiiveapi.herokuapp.com/");
    // staging
    // socket = io("https://deepdiiveapi-staging.herokuapp.com/");

    // socket = io(BaseUrl);

    console.log("first connection")

    socket.on("connect", () => {
        socket.emit("join_game", {
          game_id: gameId
        })
    })
    socket.on("users_ready", () => {
        onGameReady();
    })
};

export const onNewQuestion = (onQuestion) => {
    if(!socket) return;

    socket.on("question", (questionData) => {
        onQuestion(questionData);
    })
}
 
export const sendQuestion = (questionData) => {
    if(!socket) return;

    socket.emit("next_question", questionData);
}

export const startHostGame = (gameId) => {
    if(!socket) return;

    socket.emit("host_game_started", {
        game_id: gameId
    });
}

export const onGuestGameStart = (onGameStart) => {
    if(!socket) return;

    socket.on("guest_game_can_start", () => {
        onGameStart();
    })
}

export const startGuestGame = (gameId) => {
    if(!socket) return;

    socket.emit("guest_game_started", {
        game_id: gameId
    })
}

export const onGameStart = (onStart) => {
    if(!socket) return;

    socket.on("game_start", () => {
        onStart();
    })
}

export const onGameEnd = (onEnd) => {
    if(!socket) return;

    socket.on("game_end", () => {
        onEnd();
    })
}

export const endGame = (gameId) => {
    if(!socket) return;

    socket.emit("end_game", {
        game_id: gameId
    })
}

export const onGuestJoinGame = (onGuestJoin) => {
    if(!socket) return;
    
    socket.on("guest_join", () => {
        onGuestJoin();
    })
}

export const guestJoin = (gameId) => {
    if(!socket) return;

    socket.emit("guest_joined_game", {
        game_id: gameId
    })
}

