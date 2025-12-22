intent = new Intent(Intent.ACTION_EDIT); 
intent.setData(Uri.parse("bazaar://details?id=" + "مود بازار")); 
intent.setPackage("com.farsitel.bazaar"); 
startActivity(intent); 
