int xorOperation(int n, int start){

    int *array;

    array = (int*) malloc(n * sizeof(int));

    int result = 0;

    for(int i = 0; i < n; i++){
        array[i] = start + 2 * i;
        result = result ^ array[i];
    }

    return result;
}