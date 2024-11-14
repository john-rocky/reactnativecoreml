//
//  YOLODetectorBridge.m
//  YoloObjectDetectionApp
//
//  Created by 間嶋大輔 on 2024/11/14.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(ViewModule, NSObject)
RCT_EXTERN_METHOD(showView)
RCT_EXTERN_METHOD(dismissView)
@end
