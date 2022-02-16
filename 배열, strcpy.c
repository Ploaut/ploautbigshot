#include <stdio.h>
#include <string.h>
#pragma warning(disable :4996)
 
int main(void)
{
	char str1[80] = "cat";
	char str2[80];

	strcpy(str1, "tiger");
	strcpy(str2, str1);
	printf("%s,%s", str1, str2);

	return 0;
}