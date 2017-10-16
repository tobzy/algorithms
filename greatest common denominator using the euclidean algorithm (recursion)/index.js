function gcd (a, b){
 if(a == 0) return b;
 if(b == 0) return a;
 
 if(a >= b){
   if(a % b == 0) return b;
   return gcd(a%b, b)
 }
 
  if(b >= a){
   if(b % a == 0) return a;
   return gcd(b%a, a)
 }
}
