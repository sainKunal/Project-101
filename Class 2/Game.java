import java.security.KeyRep;

public class Game{   
    Board board;
    Player player1;
    Player player2;

    public Game(int size){
    this.board = new Board size;
    this.player1 = new Player(symbol:'X');
    this.player2 = new Player(symbol:'O');
    }

    public void launch(){

