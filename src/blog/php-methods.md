---


title: 'What I learnt about PHP using wordpress'
date: '2020-05-04'
sinopsis: "I started developing wordpress without knowing anything about PHP other than it was used as a backend language."
tags: [PHP, Wordpress]

---


**implode** converts the array into a string:

example from php.net

```php

<?php

$array = array('lastname', 'email', 'phone');
$comma_separated = implode(",", $array);

echo $comma_separated; // lastname,email,phone

// Empty string when using an empty array:
var_dump(implode('hello', array())); // string(0) ""

?>

```

We dont have a similar thing in Javascript. Probably we would have either to map the array or create a method to join it somehow.

___

**esc_attr** is actually a wordpress function, its used for safety so any special characters don't get evaluated as html. So if for example you are echoing inside a html class, and by any chance you are echoing something as ```html "><script>alert();</script>``` you wont actually escape the class attribute.

example from a wordpress plugin: 

```php

<div class="wcsatt-options-product-prompt <?php echo esc_attr( implode( ' ', $prompt_classes ) ); ?>" data-prompt_type="<?php echo esc_attr( $prompt_type ); ?>"><?php echo $prompt; ?></div>


```


## To be continued
