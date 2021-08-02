var images =
            ["https://www.bing.com/images/blob?bcid=S2I28k4TLAcDKQ",
            "https://i.pinimg.com/originals/9d/a0/db/9da0dbfe8620a55b9330b320f2b3c6f2.png" ,
            "https://tse3.mm.bing.net/th/id/OIP.A5b3QKvshD9DiFq7hoEvlQHaGZ?pid=ImgDet&rs=1" ,
            "https://i.pinimg.com/originals/92/44/79/924479e26163f1e6d9cc6cb24843e535.jpg" ,
            "https://www.pngitem.com/pimgs/m/309-3099203_commerce-vector-cartoon-business-man-hq-image-free.png" ,
            "https://i.pinimg.com/736x/5f/84/a4/5f84a495ccf584ba8b9048fbde4413d2.jpg" ,
            ];
            var names = ["Family Book", "Ramachandra Rao", "Mani Kumari", "Kanthisree",
"Chandra Kiran", "Vaishnavi" ];
var i = 0;
function update()
i++;
var numbers_of_family_member_in_array = 5
if(i > numbers_of_family_member_in_array ){
    1 = 0;
}
var updatedImage = images[i];
var updatedName = names[i];
document . getElementById("family_member_image") . src = updatedImage;
document. getElementById("family_member_name") . innerHTML = updatedName;