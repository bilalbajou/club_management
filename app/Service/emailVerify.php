<?php 

namespace App\Service;
use Illuminate\Support\Facades\Http;


class emailVerify{

   

 public function __construct()
 {
    

 }

    public function verify($email){
    $response=Http :: withHeaders(
        [
            'X-RapidAPI-Host' => 'validect-email-verification-v1.p.rapidapi.com',
            'X-RapidAPI-Key' => '04e4c6a56emshd0b636fcfc9635dp1b746bjsn067950035424'
        ]
        )->get('https://validect-email-verification-v1.p.rapidapi.com/v1/verify?email='.$email);
        if($response->json()['status']=='invalid'){
            return false;
         }

         return true;
        }
}




?>