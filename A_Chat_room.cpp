#include <bits/stdc++.h>
using namespace std;
#define ll long long

 int main(){

string s;
while(cin>>s){
     string s1="hello";
     ll i=0;
     for (int j=0;j<s.size();j++){
if(i==5){
    break;
}
else if(s1[i]==s[j]) {
i++;
}
else if( s[j]==s1[i-1]){
    continue;
}
else {
    i=0;
}



     }

if(i==5) cout<<"YES"<<endl;
else cout<<"NO"<<endl;

}



 }