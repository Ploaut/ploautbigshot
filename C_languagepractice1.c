#include <stdio.h>
#pragma warning(disable: 4996)

int main(void)
{
    char fruit[20];
    int cnt;

    printf("좋아하는 과일: ");
    scanf("%s",fruit);
    printf("몇 개: ");
    scanf("%d",&cnt);
    printf("%s 를 %d 개 드립니다.",fruit, cnt);

    return 0;
    
}