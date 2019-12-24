//
//  ViewController.m
//  bai02
//
//  Created by Nguyen Duc Hoang on 12/24/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "ApiManager.h"
#import <React/RCTLog.h>

@interface ApiManager ()

@end

@implementation ApiManager
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(sendRequest: (NSString *)url
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
  NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
  [request setHTTPMethod:@"GET"];
  [request setURL:[NSURL URLWithString:url]];
  
  NSError *error = nil;
  NSHTTPURLResponse *responseCode = nil;
  
  NSData *oResponseData = [NSURLConnection sendSynchronousRequest:request returningResponse:&responseCode error:&error];
  
  if([responseCode statusCode] != 200){
    NSLog(@"Error getting %@, HTTP status code %li", url, (long)[responseCode statusCode]);
    reject(@"213", @"Cannot send request", error);
  }
  //[json objectForKey:@"ID"]);
  NSString *jsonString = [[NSString alloc] initWithData:oResponseData encoding:NSUTF8StringEncoding];
  //  NSString *jsonString = @"[{\"ID\":{\"Content\":268,\"type\":\"text\"},\"ContractTemplateID\":{\"Content\":65,\"type\":\"text\"}}]";
  NSData *data = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
  NSMutableString *json2 = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingAllowFragments error:nil];
  id json3 =  [NSJSONSerialization
               JSONObjectWithData:[json2 dataUsingEncoding:NSUTF8StringEncoding]
               options:0 error:nil];
  NSLog(@"hehe");
  resolve(json3);
}

@end
