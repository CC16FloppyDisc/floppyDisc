
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('item_lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('item_lists').insert([
        {game_title: "METAL GEAR", game_publisher: 'KONAMI',game_condition:"C",game_console:"NES", game_price:"1580", image_URL:"https://img.atwikiimg.com/www26.atwiki.jp/gcmatome/attach/2652/848/ac3831e29fa0b3fa07f86110.L.jpg",movie_URL:"https://www.youtube.com/watch?v=HvA-0JfbHOQ",seller_name:"秀夫",seller_family_name:"小島",seller_postal_code:"104-0061", seller_address:"東京都中央区銀座1丁目11番1号", seller_phone:"03-6867-0573", buyer_name:"悠太", buyer_family_name:"石黒", buyer_postal_code:"290-0142", buyer_address:"千葉県市原市ちはら台南", buyer_phone:"07043659128"},
        {game_title: "Final Fantasy", game_publisher: 'SQUARE',game_condition:"S",game_console:"NES", game_price:"91800", image_URL:"https://m.media-amazon.com/images/I/51LMDjpYeUL._AC_.jpg",movie_URL:"https://www.youtube.com/watch?v=fTdlzqhSdt8",seller_name:"Hironobu",seller_family_name:"Sakaguchi",seller_postal_code:"153-0064", seller_address:"東京都目黒区下目黒一丁目8番1号", seller_phone:"03-5292-8100", buyer_name:"Yuta", buyer_family_name:"Ishiguro", buyer_postal_code:"290-0142", buyer_address:"Ichihara City Chiba", buyer_phone:"07043659128"},
        {game_title: "The Legend of Zelda", game_publisher: 'Nintendo',game_condition:"B", game_price:"19800", image_URL:"https://m.media-amazon.com/images/I/81pxNsMRptL._AC_SY500_.jpg",movie_URL:"https://www.youtube.com/watch?v=6g2vk8Gudqs",seller_name:"Shigeru",seller_family_name:"Miyamoto",seller_postal_code:"601-8501", seller_address:"京都市南区上鳥羽鉾立町11番地1", seller_phone:"075-662-9600", buyer_name:"悠太", buyer_family_name:"石黒", buyer_postal_code:"290-0142", buyer_address:"千葉県市原市ちはら台南", buyer_phone:"07043659128"},
        {game_title: "Sonic The Hedgehog", game_publisher: 'SEGA',game_condition:"S",game_console:"MD", game_price:"12000", image_URL:"https://images-na.ssl-images-amazon.com/images/I/51DDS9XERXL._AC_.jpg",movie_URL:"https://www.youtube.com/watch?v=kqAY310c8Gk",seller_name:"英一",seller_family_name:"湯川",seller_postal_code:"141-0033", seller_address:"東京都品川区西品川一丁目1－1 住友不動産大崎ガーデンタワー", seller_phone:"03-5736-7111", buyer_name:"Yuta", buyer_family_name:"Ishiguro", buyer_postal_code:"290-0142", buyer_address:"Ichihara City Chiba", buyer_phone:"07043659128"},
        {game_title: "Donkey Kong", game_publisher: 'Nintendo',game_condition:"A",game_console:"NES", game_price:"19800", image_URL:"https://m.media-amazon.com/images/I/81pxNsMRptL._AC_SY500_.jpg",movie_URL:"https://www.youtube.com/watch?v=C_PrG8P5W8o",seller_name:"Shigeru",seller_family_name:"Miyamoto",seller_postal_code:"601-8501", seller_address:"京都市南区上鳥羽鉾立町11番地1", seller_phone:"075-662-9600", buyer_name:"悠太", buyer_family_name:"石黒", buyer_postal_code:"290-0142", buyer_address:"千葉県市原市ちはら台南", buyer_phone:"07043659128"},
      ]);
    });
};
