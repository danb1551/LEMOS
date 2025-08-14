
# I think I messed up. This idea is bullshit.

# LEMOS

# Curently not finished

Lemos is web application for better account managing.
You as a web administrator create account and add our API to your web. When you are creating Log in and Sign up page you just add FORM to your HTML with action redirecting to our web. We save usernames and password to our database and send you token in {platform_name_user_key} form. We manage if the user login correctly. You have only database with this tokens.

<!--
aplikace na jednodušší správu účtů na různých platformách. Na nějaké platformě bude tlačítko login nebo sign up a přesměruje ho to na moji stránku, kde si založí účet na adrese www.myapp.com/nazev_dane_platformy/{login/signup} a pokud se příhlásí správně, pošle to na web pouze token {platforma-vygenerovaný_kód}. Vygenerovaný kód má každý uživatel jiný. Při registraci se vytvoří tabulka:
|------------------------------|
|              user            |
|------------------------------|
| username | passwd | plat_key |
|----------|--------|----------|
|  USER11  | qwertz | plat_... |
|  USER22  | admin2 | plat_... |
|  USER69  | poiuzt | plat_... |
|------------------------------|

-->