import java.util.*;
public class hai
{
    public static void main(String args[])
    {
    Voter[]v=new Voter[2];
    v[0]=new Voter(101,"Aman",23,true,"TSE");
    v[1]=new Voter(102,"karam",33,true,"TSE");
    for(Voter nv:v)
    (
      if(nv.isVoteCasted())
    (
      System.out.println(nv.getVoterName());
    ))
    }
}