## A server for generating developer tokens for Apple's MusicKit service

For information about MusicKit tokens, visit the [Apple documentation](https://developer.apple.com/library/content/documentation/NetworkingInternetWeb/Conceptual/AppleMusicWebServicesReference/SetUpWebServices.html#//apple_ref/doc/uid/TP40017625-CH2-SW2)

On the server you will need two environment variables with the following names:
 - MUSIC_KIT_KEY_ID
 - APPLE_TEAM_ID

And a private key file at the root named:
 - AuthKey.p8  


 See instructions from Apple documentation about generating the private key and MusicKit Key ID.

Generated tokens have a six month duration before expiring.

__TODO:__
 - It probably needs an npm build script and a node version for "engine" in package.json
 - Unit tests
