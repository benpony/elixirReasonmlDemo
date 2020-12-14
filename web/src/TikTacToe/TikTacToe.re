type player =
  | Cross
  | Circle;

type field =
  | Empty
  | Marked(player);

let toString = (field: field) =>
    switch(field){
        | Marked(Cross) => "X"
        | Marked(Circle) => "O"
        | Empty => ""
    };

let swapPlayers = (player) =>
    switch player {
        | "X" =>  "O"
        | "O" =>  "X"
        | _ => ""
    }

let board = [|1,2,3,4,5,6,7,8,9|];
let _bmap = Belt.HashMap.Int.make(~hintSize=10);


[@react.component]
let make = () => {
    let (boardMap,setBoardMap) = React.useState(_ => _bmap);
    let (player,setPlayer) = React.useState(() => "X");
    let (result, setResult) = React.useState(() => "");
    let markField = (~player: string, ~fieldNum:int) => {
        Belt.HashMap.Int.set(_bmap, fieldNum, player);
        setBoardMap(_ => _bmap)
        setPlayer(_ => swapPlayers(player))
    };

    let isVictorious = (_bmap,player: string):bool => {
        Belt.HashMap.Int.get(_bmap,1) == Some(player) &&
        Belt.HashMap.Int.get(_bmap,2) == Some(player) &&
        Belt.HashMap.Int.get(_bmap,3) == Some(player);
    }

    React.useEffect1(() => {
        setResult(_ => isVictorious(_bmap,swapPlayers(player))
            ? "BOKI LOST :)"
            : ""
        );
        None;
    }, [|player|],);

    <div style=(ReactDOM.Style.make(
                ~height="360px",
                ~width="270px",
                ~margin="40px",()))>

        <div style=(ReactDOM.Style.make(
            ~display="flex",
            ~height="100px",
            ~fontSize="larger",
            ~alignItems="center",
            ~justifyContent="center",()))>
            {"Milkush is Awesome!" |> ReasonReact.string}
        </div>

        <div className="board">
            {
                board
                    |> Array.mapi((index,num) =>
                            <div
                                key=(string_of_int(index))
                                style=(ReactDOM.Style.make(
                                    ~height="80px",
                                    ~width="80px",
                                    ~margin="2px",
                                    ~border="1px solid grey",
                                    ~display="inline-block",()))
                                onClick=(_evt => {
                                    markField(
                                        ~player=player,
                                        ~fieldNum=num,
                                    );
                                })>
                                <div style=(ReactDOM.Style.make(
                                    ~display="flex",
                                    ~height="100%",
                                    ~alignItems="center",
                                    ~justifyContent="center",()))>
                                    <div>
                                        {
                                            switch(Belt.HashMap.Int.get(boardMap,num)){
                                                | Some("X") => "X"
                                                | Some("O") => "O"
                                                | Some(_) => ""
                                                | None => ""
                                            }
                                            |> React.string
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    |> ReasonReact.array
            }
        </div>

        <div style=(ReactDOM.Style.make(
            ~display="flex",
            ~height="100px",
            ~fontSize="larger",
            ~alignItems="center",
            ~justifyContent="center",()))>
            {result |> ReasonReact.string}
        </div>
    </div>
}

// ~display=( num != 0 && mod_float(float_of_int(num), float_of_int(4)) == 0.0 ? "block" : "inline-block" ),
