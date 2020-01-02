//
//  ViewManager.m
//  bai12
//
//  Created by Nguyen Duc Hoang on 1/2/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "ViewManager.h"
#import "bai12-Swift.h"

@implementation ViewManager
RCT_EXPORT_MODULE(MyView)

- (UIView *)view
{
  MainViewController *mainViewController = [[MainViewController alloc] init];
  return mainViewController.view;
}
@end
